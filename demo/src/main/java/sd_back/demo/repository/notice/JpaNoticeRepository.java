package sd_back.demo.repository.notice;

import org.springframework.data.jpa.repository.JpaRepository;
import sd_back.demo.domain.Notice;

import java.util.List;


public interface JpaNoticeRepository extends JpaRepository<Notice, Integer> {

    List<Notice> findByMemberId(long memberId);
    List<Notice> findByTitle(String title);
}
