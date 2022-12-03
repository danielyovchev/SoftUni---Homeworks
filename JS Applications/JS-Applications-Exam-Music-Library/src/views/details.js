import { deleteById, getById } from '../api/data.js';
import {html, nothing} from '../lib.js';
import {addLike, getLikesforAlbum, getLikesforAlbumOnUser} from '../api/likes.js';
const detailsTemplate = (album, hasUser, isOwner, onDelete, likes, hasLiked, onLike) => html`<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src=${album.imageUrl} alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${album.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">${likes}</span></div>
  ${albumControls(album, hasUser, isOwner, onDelete, hasLiked, onLike)}
  
</div>
</section>`;

function albumControls(album, hasUser, isOwner, onDelete, hasLiked, onLike){
    if(hasUser == false){
        return nothing;
    }
    if(hasUser == true && isOwner == false && !hasLiked){
        return html`<!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          <a @click=${onLike} href="javascript:void(0)" id="like-btn">Like</a>
        </div>`;
    }
    if(isOwner){
        return html`<!--Edit and Delete are only for creator-->
        <div id="action-buttons">
          <a href="/edit/${album._id}" id="edit-btn">Edit</a>
          <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>`;
    }
}
export async function showDetails(ctx){
    const id = ctx.params.id;
    const album = await getById(id);
    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && ctx.user._id == album._ownerId;
    const likes = await getLikesforAlbum(id);
    const hasLiked = await getLikesforAlbumOnUser(id, ctx.user._id);
    ctx.render(detailsTemplate(album, hasUser, isOwner, onDelete, likes, hasLiked, onLike));
    async function onDelete(){
        const choice = confirm("Are you sure you want to delete this pet?");
        if (choice){
            await deleteById(id);
            ctx.page.redirect('/catalog');
        }
    }
    async function onLike(){
      await addLike(id);
      ctx.page.redirect('/catalog/'+id);
    }
}