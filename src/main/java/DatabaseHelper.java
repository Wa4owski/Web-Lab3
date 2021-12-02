import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.omg.PortableServer.POA;

import java.util.List;

public class DatabaseHelper {
    private SessionFactory factory;

    public DatabaseHelper() {
        factory = SessionFactoryUtil.getSessionFactory();
    }

//    public void save(ResultPoint entry) {
//        Session session = factory.openSession();
//        Transaction transaction = session.beginTransaction();
//        session.save(entry);
//        transaction.commit();
//        session.close();
//    }
public void save(ResultPoint entry) {
    Session session = factory.openSession();
    Transaction transaction = session.beginTransaction();
    session.save(entry);
    transaction.commit();
    session.close();
}


    public List<ResultPoint> getAll() {
        Session session = factory.openSession();
        return session.createQuery("SELECT p FROM " + ResultPoint.class.getSimpleName() + " p",
                ResultPoint.class).getResultList();
    }

//    public List<db.Test> getAll() {
//        Session session = factory.openSession();
//       // return session.createQuery("SELECT p FROM " + db.Test.class.getSimpleName() + " p",
//       //         db.Test.class).getResultList();
//        return session.createQuery("FROM db.Test", db.Test.class).getResultList();
//    }
}