package sd_back.demo.controller.board;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import sd_back.demo.domain.Member;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
public class BoardForm {

    @NotNull
    String title;
    @NotNull
    String content;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    @NotNull
    LocalDateTime date_time;

    @NotNull
    Member member;
}
