package sd_back.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "board")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Board {
    @Id
    @GeneratedValue
    int id;

    String title;
    String content;

    LocalDateTime date_time;

    @ManyToOne //단방향 관계
    @JoinColumn(name = "member_id")
    private Member member; //Member table의 외래키

    public Board(String title, String content, LocalDateTime dateTime, Member member) {
        this.title = title;
        this.content = content;
        this.date_time = dateTime;
        this.member = member;
    }
}
