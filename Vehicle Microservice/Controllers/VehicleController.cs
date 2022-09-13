using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vehicle_Microservice.Data;
using Vehicle_Microservice.Model;
using Vehicle_Microservice.Repository;

namespace Vehicle_Microservice.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class VehicleController : Controller
    {
        private readonly IVehicleRepository _vehicleRepository;
        private static readonly log4net.ILog _log = log4net.LogManager.GetLogger(typeof(VehicleController));
        public VehicleController(IVehicleRepository vehicleRepository)
        {
            _vehicleRepository = vehicleRepository;
            
        }
        [HttpGet]
        [Route("allVehicles")]
        public IActionResult GetAllVehiclesList()
        {
            try
            {
                _log.Info("GetAllVehicles : Process Initiated");
               _log.Info("GetAllVehicles : Process Terminated Successfully.");
                return Ok(_vehicleRepository.GetAllVehicles());
            }
            catch (Exception exception)
            {

                _log.Error("GetAllVehicles : Process Terminated With Exception -", exception);
                return NoContent();
            }
        }

        [HttpPost]
        [Route("addVehicle")]
        public IActionResult AddVehicle([FromBody]Vehicle vehicle)
        {
            try
            {
                _log.Info("AddVehicle : Process Initiated");

               
                var message = _vehicleRepository.AddVehicle(vehicle);
                if (message == "true")
                {
                    _log.Info("AddVehicle : Process Terminated Successfully.");
                    return Ok();
                }
                _log.Info("AddVehicle : Duplicate Entry.");
                return Conflict();
            }
            catch (Exception exception)
            {
                _log.Error("AddVehicle : Process Terminated With Exception -", exception);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

        }
        
        [HttpGet]
        [Route("vehiclesByType")]
        public IActionResult GetVehiclesByType([FromQuery] string type)
        {
            try
            {
                _log.Info("getVehiclesByType : Process Initiated");

               
                _log.Info("getVehiclesByType : Process Terminated Successfully.");
                return Ok(_vehicleRepository.DisplayVehicleByType(type));
            }
            catch (Exception exception)
            {

                _log.Error("getVehiclesByType : Process Terminated With Exception -", exception);
                return NoContent();
            }
        }

        [HttpGet]
        [Route("vehiclesByRegistrationNo")]
        public IActionResult GetVehiclesByRegistrationNo([FromQuery] int regNo)
        {
            try
            {
                _log.Info("getVehiclesByNum : Process Initiated");


                _log.Info("getVehiclesByNum : Process Terminated Successfully.");
                return Ok(_vehicleRepository.DisplayVehicleByRegistrationNo(regNo));
            }
            catch (Exception exception)
            {

                _log.Error("getVehiclesByNum : Process Terminated With Exception -", exception);
                return NoContent();
            }
        }

        [HttpDelete]
        [Route("deleteVehicle")]
        public IActionResult DeleteVehicle([FromQuery]int regNo)
        {
            try
            {
                _log.Info("DeleteVehicle : Process Initiated");


                var message = _vehicleRepository.RemoveVehicle(regNo);
                if (message == "true")
                {
                    _log.Info("DeleteVehicle : Process Terminated Successfully.");
                    return Ok();
                }
                _log.Info("DeleteVehicle : Not Found.");
                return NotFound();
            }
            catch (Exception exception)
            {
                _log.Error("DeleteVehicle : Process Terminated With Exception -", exception);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpPut]
        [Route("updateVehicle")]
        public IActionResult UpdateVehicle([FromQuery]int regNo,[FromBody] UpdateVehicle vehicle)
        {
            try
            {
                _log.Info("UpdateVehicle : Process Initiated");


                var message = _vehicleRepository.UpdateVehicleDetails(regNo,vehicle);
                if (message == "true")
                {
                    _log.Info("UpdateVehicle : Process Terminated Successfully.");
                    return Ok();
                }
                _log.Info("UpdateVehicle : Not Found.");
                return NotFound();
            }
            catch (Exception exception)
            {
                _log.Error("UpdateVehicle : Process Terminated With Exception -", exception);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
    }
}
