class Company {
    constructor() {
        this.departments = [];
    }
 
    addEmployee(username, salary, position, department) {
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        }
 
        let currentDepartment = this.departments.find(d => d.name === department);
 
        if (currentDepartment === undefined) {
            currentDepartment = {
                name: department,
                employees: []
            };
 
            this.departments.push(currentDepartment);
        }
 
        currentDepartment.employees.push({
            username,
            salary,
            position
        });
        
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
 
    bestDepartment() {
        const copyOfDepartments = this.departments.map(d => {
            const department = Object.assign({}, d);
            department.averageSalary = d.employees.reduce((previous, current) => previous + current.salary, 0) / d.employees.length;
            return department;
        });
 
        copyOfDepartments.sort((a, b) => b.averageSalary - a.averageSalary);
        
        const bestDepartment = copyOfDepartments[0];
 
        if (bestDepartment !== undefined) {
            bestDepartment.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
            const result = [`Best Department is: ${bestDepartment.name}`,
                            `Average salary: ${bestDepartment.averageSalary.toFixed(2)}`,
            ];
 
            bestDepartment.employees.forEach(employee => 
                result.push(`${employee.username} ${employee.salary} ${employee.position}`));
            
            return result.join('\n');
        }
    }
}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());