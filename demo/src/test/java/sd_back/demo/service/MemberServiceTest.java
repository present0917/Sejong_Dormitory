package sd_back.demo.service;

import org.junit.jupiter.api.Test;
import sd_back.demo.domain.Member;
import sd_back.demo.repository.member.JpaMemberRepository;

import static org.assertj.core.api.Assertions.*;

class MemberServiceTest {

    JpaMemberRepository memberRepository;
    MemberService memberService = new MemberService(memberRepository); //memberRepository를 service에 주입

    @Test
    void login() {
        Member member = new Member(18011552L, "히히", "test");

        Member loginMember = memberService.login(18011552L, "test");

        assertThat(loginMember).isEqualTo(member);
    }

    @Test
    void join() {
        memberService.join(18011552L, "히히", "test");

        Member findMember = memberRepository.findByStudentId(18011552L).get();



        assertThat(findMember.getName()).isEqualTo("히히");
    }
}