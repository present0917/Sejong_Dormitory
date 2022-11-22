package sd_back.demo.controller.notice;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import sd_back.demo.domain.Member;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
public class NoticeForm {
    @NotNull
    String title;
    @NotNull
    String content;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @NotNull
    LocalDateTime dateTime;

    @NotNull
    Member member;
}
