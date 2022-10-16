package sd_back.demo.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import sd_back.demo.domain.Member;
import sd_back.demo.domain.Reservation;
import sd_back.demo.repository.repository.JpaReservationRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ReservationService {
    //private final MemoryReservationRepository reservationRepository;
    private final JpaReservationRepository reservationRepository;

    public Reservation saveReservation(LocalDate date, int time, Member member){ //예약
        Reservation reservation = new Reservation(date, time, member);
        Optional<Reservation> findReservation = reservationRepository.findByDateAndTime(date, time);

        if (findReservation.isEmpty()) { //해당 예약 정보가 없다면
            reservationRepository.save(reservation);
            return reservation;
        }
        return null;
    }

    public List<Reservation> findAllReservation(){ //모든 예약 조회
        return reservationRepository.findAll();
    }

    public List<Reservation> findReservationListOfMember(Member member){ //해당 학생 예약만 조회
        List<Reservation> list = reservationRepository.findByMemberId(member);


        if (list.isEmpty()) { //해당 학생의 예약 정보가 없음
            return null;
        }
        return list;
    }
    
    public Reservation updateReservation(LocalDate date, int time, int id){ //예약 수정
        Optional<Reservation> findReservation = reservationRepository.findById(id);
        if (findReservation.isEmpty()) { //해당 예약 정보가 없음
            return null;
        }
        findReservation = reservationRepository.Update(date, time);

        return findReservation.get();
    }

    public Reservation cancelReservation(LocalDate date, int time, Member member) { //예약 취소
        Reservation reservation = new Reservation(date, time, member);
        Optional<Reservation> findReservation = reservationRepository.findByDateAndTime(date, time);

        if (findReservation.isEmpty()) { //해당 예약 정보가 없다면
            return null;
        }

        reservationRepository.delete(findReservation.get());

        return findReservation.get();
    }
}
