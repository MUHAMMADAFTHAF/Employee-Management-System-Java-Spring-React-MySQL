package urma.ma.emp_management_sys.entity;


import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="employees")

public class Employee {

            @Id
            @GeneratedValue(strategy = GenerationType.IDENTITY)
            private long id;
            @Column(name = "first_name")
            private String firstName;
            @Column(name = "last_name")
            private String lastName;
            @Column(name = "email",nullable = false, unique = true)
            private String email;




}
