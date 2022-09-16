package sd_back.demo.repository.calender;

import sd_back.demo.domain.Reservation;

import java.time.LocalDate;
import java.util.*;


public class MemoryReservationRepository implements ReservationRepository {

    private long num = 0L;
    private static Map<Long, Reservation> store =new HashMap<>();

    @Override

    public Reservation save(Reservation reservation) {

        reservation.setId(++num);
        store.put(reservation.getId(), reservation);

        return reservation;
    }

    @Override
    public Optional<Reservation> findById(Long id) {

        return Optional.ofNullable(store.get(id));
    }

    @Override
    public Optional<Reservation> findByTime(LocalDate date, int time) {

        return store.values().stream()
                .filter(reservation -> Objects.equals(reservation.getDate(), date) && Objects.equals(reservation.getTime(), time))
                .findAny();
    }


    @Override
    public Optional<Reservation> findByStudentId(int studentId) {

        return store.values().stream()
                .filter(reservation -> Objects.equals(reservation.getStudentId(), studentId))
                .findAny();

        //return null;
    }

    @Override
    public List<Reservation> findAll() {
        return new ArrayList<>(store.values());
    }

    @Override
    public Reservation delete(Reservation reservation) {

        return store.remove(reservation.getId());
    }

    public void clearStore() {
        store.clear();
    }
}
