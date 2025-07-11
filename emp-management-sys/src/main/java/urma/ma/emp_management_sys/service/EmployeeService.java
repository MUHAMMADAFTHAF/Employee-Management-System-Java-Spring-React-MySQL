package urma.ma.emp_management_sys.service;

import urma.ma.emp_management_sys.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {

        EmployeeDto createEmployee(EmployeeDto employeeDto);

        EmployeeDto getEmployeeById(Long employeeId);

        List<EmployeeDto> getAllEmployees();

        EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee);

        void deleteEmployee(Long employeeId);

}
