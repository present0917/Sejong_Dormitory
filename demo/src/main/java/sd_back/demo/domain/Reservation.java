package sd_back.demo.domain;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "reservation")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {

    @Id
    @GeneratedValue
    private int id;
    private LocalDate date; //2022-09-16 형식
    private int time; //9~19
    @ManyToOne //단방향 관계
    @JoinColumn(name = "member_id")
    private Member member; //Member table의 외래키


    public Reservation(LocalDate date, int time, Member member) {
        this.date = date;
        this.time = time;
        //this.member. = memberId;
        //this.getMember().setId((long) memberId);
        this.member = member;
    }

}
