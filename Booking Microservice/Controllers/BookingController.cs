using Booking_Microservice.Model;
using Booking_Microservice.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Booking_Microservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BookingController : ControllerBase
    {
        private readonly IBookingRepository _repo;
        private static readonly log4net.ILog _log = log4net.LogManager.GetLogger(typeof(BookingController));
        public BookingController(IBookingRepository bookingRepository)
        {
            _repo = bookingRepository;
        }
        [HttpGet]
        [Route("getBookingById")]
        public IActionResult GetBookingById([FromQuery]int id)
        {
            try
            {
                _log.Info("getBookingsById : Process Terminated Successfully.");
                return Ok(_repo.DisplayBookingById(id));
            }
            catch (Exception e)
            {

                _log.Error("getBookingsById : Process Terminated With Exception -", e);
                return NoContent();
            }
        }
        [HttpPost]
        [Route("addBooking")]
        public IActionResult AddBooking([FromBody] Booking booking)
        {
            try
            {
                _log.Info("AddBooking : Process Initiated");


                var message = _repo.AddBooking(booking);
                if (message == "true")
                {
                    _log.Info("AddBooking : Process Terminated Successfully.");
                    return Ok();
                }
                _log.Info("AddBooking : Duplicate Entry.");
                return Conflict();
            }
            catch (Exception exception)
            {
                _log.Error("AddBooking : Process Terminated With Exception -", exception);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
        [HttpGet]
        [Route("getAllBookings")]
        public IActionResult GetAllBookings()
        {
            try
            {
                _log.Info("GetAllBookings : Process Initiated");
                _log.Info("GetAllBookings : Process Terminated Successfully.");
                return Ok(_repo.DisplayAllBookings());
            }
            catch (Exception exception)
            {

                _log.Error("GetAllBookings : Process Terminated With Exception -", exception);
                return NoContent();
            }
        }
        [HttpGet]
        [Route("getBookingsbyDateTime")]
        public IActionResult GetBookingsByDateTime(DateTime startDateTime, DateTime endDateTime)
        {
            try
            {
                _log.Info("GetBookingsByDateTime : Process Initiated");
                _log.Info("GetBookingsByDateTime : Process Terminated Successfully.");
                Console.WriteLine(startDateTime);
                Console.WriteLine(endDateTime);
                return Ok(_repo.DisplayBookingByDateTime(startDateTime, endDateTime));

            }
            catch (Exception exception)
            {
                _log.Error("GetBookingsByDateTime : Process Terminated With Exception -", exception);
                return NoContent();
            }
        }
        [HttpGet]
        [Route("getAllAvailableDriverVehicle")]
        public IActionResult GetAvailableDriverVehicle()
        {
            try
            {
                string token = ((string)HttpContext.Request.Headers.First(x => x.Key == "Authorization").Value).Split().Last();
                _log.Info("GetAvailableDriverVehicle : Process Initiated");
                _log.Info("GetAvailableDriverVehicle : Process Terminated Successfully.");
                return Ok(_repo.GetAllAvailableDriversVehicles(token));
            }
            catch (Exception exception)
            {
                _log.Error("GetAvailableDriverVehicle : Process Terminated With Exception -", exception);
                return NoContent();
            }
        }
    }
}
