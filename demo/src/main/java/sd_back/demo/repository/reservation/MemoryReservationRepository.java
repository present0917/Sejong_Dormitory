//package sd_back.demo.repository.reservation;
//
//import org.springframework.stereotype.Repository;
//import sd_back.demo.domain.Reservation;
//
//import java.time.LocalDate;
//import java.util.*;
//import java.util.stream.Collectors;
//
//@Repository
//public class MemoryReservationRepository implements ReservationRepository {
//
//    private long num = 0L;
//    private static Map<Long, Reservation> store =new HashMap<>();
//
//    @Override
//
//    public Reservation save(Reservation reservation) {
//
//        reservation.setId(++num);
//        store.put(reservation.getId(), reservation);
//
//        return reservation;
//    }
//
//    @Override
//    public void update(Long id, LocalDate date, int time) {
//        Reservation reservation = findById(id).orElseThrow(() -> new NoSuchElementException("해당하는 예약이 없습니다"));
//        reservation.setDate(date);
//        reservation.setTime(time);
//    }
//
//    @Override
//    public Optional<Reservation> findById(Long id) {
//
//        return Optional.ofNullable(store.get(id));
//    }
//
//    @Override
//    public Optional<Reservation> findByTime(LocalDate date, int time) {
//
//        return store.values().stream()
//                .filter(reservation -> Objects.equals(reservation.getDate(), date) && Objects.equals(reservation.getTime(), time))
//                .findAny();
//    }
//
//
//    @Override
//    public List<Reservation> findByStudentId(int memberId) {
//
//        return store.values().stream()
//                .filter(reservation -> Objects.equals(reservation.getMember().getId(), memberId))
//                .collect(Collectors.toList());
//    }
//
//    @Override
//    public List<Reservation> findAll() {
//        return new ArrayList<>(store.values());
//    }
//
//    @Override
//    public Reservation delete(Reservation reservation) {
//
//        return store.remove(reservation.getId());
//    }
//
//    public void clearStore() {
//        store.clear();
//    }
//}
