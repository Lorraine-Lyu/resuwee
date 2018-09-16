import java.util.Map;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.List;
import java.util.Collections;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * This class provides a <code>shortestPath</code> method and <code>routeDirections</code> for
 * finding routes between two points on the map.
 */
public class Router {
    /**
     * Return a <code>List</code> of vertex IDs corresponding to the shortest path from a given
     * starting coordinate and destination coordinate.
     * @param g <code>GraphDB</code> data source.
     * @param stlon The longitude of the starting coordinate.
     * @param stlat The latitude of the starting coordinate.
     * @param destlon The longitude of the destination coordinate.
     * @param destlat The latitude of the destination coordinate.
     * @return The <code>List</code> of vertex IDs corresponding to the shortest path.
     */
    public static List<Long> shortestPath(GraphDB g,
                                          double stlon, double stlat,
                                          double destlon, double destlat) {
        double distanceFromStart = 0;
        GraphDB.Node start = g.nodes.get(String.format("%d", g.closest(stlon, stlat)));
        GraphDB.Node des = g.nodes.get(String.format("%d", g.closest(destlon, destlat)));
        List<Long> toReturn = new LinkedList<>();
        Map<String, Entry> best = new HashMap<>();
        best.put(start.id, new Entry("nowhere", 0.000));
        PriorityQueue<Router.Entry> waitlist =
                new PriorityQueue<Router.Entry>(g.nodes.size(),
                        ((o1, o2) -> (o1.value.compareTo(o2.value))));

        for (String s : start.to) {
            Entry toBeAdded = new Entry(s, g.distance(Long.parseLong(start.id),
                    Long.parseLong(g.nodes.get(s).id)) + g.distance(Long.parseLong(s),
                    Long.parseLong(des.id)));
            waitlist.add(toBeAdded);
            best.put(s, new Entry(start.id, g.distance(Long.parseLong(start.id),
                    Long.parseLong(g.nodes.get(s).id))));
        }

        while (!waitlist.isEmpty()) {
            Entry test = waitlist.poll();
//            if (test == null) {
//                return new LinkedList<>();
//            }
//            System.out.println(test.value);
            String temp = test.id;
            if (temp.equals(des.id)) {
                break;
            }
            Entry bestToV = best.get(temp);
            distanceFromStart = bestToV.value;
//            System.out.println("dfrom start: " + distanceFromStart);
            for (String s : g.nodes.get(temp).to) {
                Entry e = new Entry(temp, bestToV.value
                        + g.distance(Long.parseLong(temp), Long.parseLong(s)));
                if (!best.keySet().contains(s)) {
                    best.put(s, e);
                    Entry toBeAdded = new Entry(s, distanceFromStart
                            + g.distance(Long.parseLong(temp), Long.parseLong(s))
                            + g.distance(Long.parseLong(s), Long.parseLong(des.id)));
                    waitlist.add(toBeAdded);
                }
                if (best.keySet().contains(s) && e.value < best.get(s).value) {
                    best.get(s).id = temp;
                    best.get(s).value = e.value;
                    Entry toBeAdded = new Entry(s, distanceFromStart
                            + g.distance(Long.parseLong(temp), Long.parseLong(s))
                            + g.distance(Long.parseLong(s), Long.parseLong(des.id)));
                    waitlist.add(toBeAdded);
                }

            }
        }
        Entry r = best.get(des.id);
        ((LinkedList<Long>) toReturn).addFirst(Long.parseLong(des.id));
        while (!r.id.equals("nowhere")) {
            ((LinkedList<Long>) toReturn).addFirst(Long.parseLong(r.id));
            r = best.get(r.id);
        }
//        ((LinkedList<Long>) toReturn).addFirst(Long.parseLong(start.id));
        return toReturn;
    }

    private static class Entry {
        String id;
        Double value;

        Entry(String id, Double value) {
            this.id = id;
            this.value = value;
        }

        @Override
        public boolean equals(Object o) {
            if (this == o) {
                return true;
            }
            if (!(o instanceof Entry)) {
                return false;
            }
            Entry entry = (Entry) o;
            return Objects.equals(id, entry.id);
        }

        @Override
        public int hashCode() {

            return Objects.hash(id, value);
        }
    }

//        private static class Elem {
//            String id;
//            String from;
//            Double value;
//
//            Elem (String id, String from, Double value) {
//                this.id = id;
//                this.from = from;
//                this.value = value;
//            }
//
//            @Override
//            public boolean equals(Object o) {
//                if (this == o) return true;
//                if (!(o instanceof Elem)) return false;
//                Elem elem = (Elem) o;
//                return Objects.equals(id, elem.id);
//            }
//
//            @Override
//            public int hashCode() {
//
//                return Integer.parseInt(id);
//            }
//        }
    /**
     * Given a <code>route</code> of vertex IDs, return a <code>List</code> of
     * <code>NavigationDirection</code> objects representing the travel directions in order.
     * @param g <code>GraphDB</code> data source.
     * @param route The shortest-path route of vertex IDs.
     * @return A new <code>List</code> of <code>NavigationDirection</code> objects.
     */
    public static List<NavigationDirection> routeDirections(GraphDB g, List<Long> route) {
        List<NavigationDirection> toReturn = new ArrayList<>();
        return Collections.emptyList();
    }

    /**
     * Class to represent a navigation direction, which consists of 3 attributes:
     * a direction to go, a way, and the distance to travel for.
     */
    public static class NavigationDirection {

        /** Integer constants representing directions. */
        public static final int START = 0, STRAIGHT = 1, SLIGHT_LEFT = 2, SLIGHT_RIGHT = 3,
                RIGHT = 4, LEFT = 5, SHARP_LEFT = 6, SHARP_RIGHT = 7;

        /** Number of directions supported. */
        public static final int NUM_DIRECTIONS = 8;

        /** A mapping of integer values to directions.*/
        public static final String[] DIRECTIONS = new String[NUM_DIRECTIONS];

        static {
            DIRECTIONS[START] = "Start";
            DIRECTIONS[STRAIGHT] = "Go straight";
            DIRECTIONS[SLIGHT_LEFT] = "Slight left";
            DIRECTIONS[SLIGHT_RIGHT] = "Slight right";
            DIRECTIONS[RIGHT] = "Turn right";
            DIRECTIONS[LEFT] = "Turn left";
            DIRECTIONS[SHARP_LEFT] = "Sharp left";
            DIRECTIONS[SHARP_RIGHT] = "Sharp right";
        }

        /** The direction represented.*/
        int direction;
        /** The name of this way. */
        String way;
        /** The distance along this way. */
        double distance = 0.0;

        public String toString() {
            return String.format("%s on %s and continue for %.3f miles.",
                    DIRECTIONS[direction], way, distance);
        }

        /**
         * Returns a new <code>NavigationDirection</code> from a string representation.
         * @param dirAsString <code>String</code> instructions for a navigation direction.
         * @return A new <code>NavigationDirection</code> based on the string, or <code>null</code>
         * if unable to parse.
         */
        public static NavigationDirection fromString(String dirAsString) {
            String regex = "([a-zA-Z\\s]+) on ([\\w\\s]*) and continue for ([0-9\\.]+) miles\\.";
            Pattern p = Pattern.compile(regex);
            Matcher m = p.matcher(dirAsString);
            NavigationDirection nd = new NavigationDirection();
            if (m.matches()) {
                String direction = m.group(1);
                if (direction.equals("Start")) {
                    nd.direction = NavigationDirection.START;
                } else if (direction.equals("Go straight")) {
                    nd.direction = NavigationDirection.STRAIGHT;
                } else if (direction.equals("Slight left")) {
                    nd.direction = NavigationDirection.SLIGHT_LEFT;
                } else if (direction.equals("Slight right")) {
                    nd.direction = NavigationDirection.SLIGHT_RIGHT;
                } else if (direction.equals("Turn right")) {
                    nd.direction = NavigationDirection.RIGHT;
                } else if (direction.equals("Turn left")) {
                    nd.direction = NavigationDirection.LEFT;
                } else if (direction.equals("Sharp left")) {
                    nd.direction = NavigationDirection.SHARP_LEFT;
                } else if (direction.equals("Sharp right")) {
                    nd.direction = NavigationDirection.SHARP_RIGHT;
                } else {
                    return null;
                }

                nd.way = m.group(2);
                try {
                    nd.distance = Double.parseDouble(m.group(3));
                } catch (NumberFormatException e) {
                    return null;
                }
                return nd;
            } else {
                // Not a valid nd
                return null;
            }
        }

        @Override
        public boolean equals(Object o) {
            if (o instanceof NavigationDirection) {
                return direction == ((NavigationDirection) o).direction
                        && way.equals(((NavigationDirection) o).way)
                        && distance == ((NavigationDirection) o).distance;
            }
            return false;
        }

        @Override
        public int hashCode() {
            return Objects.hash(direction, way, distance);
        }
    }
}
