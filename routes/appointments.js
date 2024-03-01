const express = require("express");
const {
<<<<<<< HEAD
  getReservations,
  getReservation,
  addReservation,
  updateReservation,
  deleteReservation
} = require("../controllers/reservations");
=======
  getAppointments,
  getAppointment,
  addAppointment,
  updateAppointment,
  deleteAppointment,
} = require("../controllers/appointments");
>>>>>>> Plhor

const router = express.Router({ mergeParams: true });

//protect = have to login
//authorize = role check
const { protect, authorize } = require("../middleware/auth");

router
  .route("/")
<<<<<<< HEAD
  .get(protect, getReservations)
  .post(protect, authorize("admin", "user"), addReservation);
router
  .route("/:id")
  .get(protect, getReservation)
  .put(protect, authorize("admin", "user"), updateReservation)
  .delete(protect, authorize("admin", "user"), deleteReservation);
=======
  .get(protect, getAppointments)
  .post(protect, authorize("admin", "user"), addAppointment);
router
  .route("/:id")
  .get(protect, getAppointment)
  .put(protect, authorize("admin", "user"), updateAppointment)
  .delete(protect, authorize("admin", "user"), deleteAppointment);
>>>>>>> Plhor

module.exports = router;
