package sd_back.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "notice")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Notice {
    @Id
    @GeneratedValue
    int id;

    String title;
    String content;
    LocalDateTime dateTime;

    @ManyToOne //단방향 관계
    @JoinColumn(name = "member_id")
    private Member member; //Member table의 외래키

    public Notice(String title, String content, LocalDateTime dateTime, Member member) {
        this.title = title;
        this.content = content;
        this.dateTime = dateTime;
        this.member = member;
    }
}
