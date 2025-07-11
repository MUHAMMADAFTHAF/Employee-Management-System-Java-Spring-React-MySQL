package urma.ma.emp_management_sys.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import urma.ma.emp_management_sys.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {



}
