using Driver_Microservice.Model;
using Driver_Microservice.Repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Driver_Microservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class DriverController : ControllerBase
    {
        private readonly IDriverRepository _driverRepository;
        private static readonly log4net.ILog _log = log4net.LogManager.GetLogger(typeof(DriverController));
        public  DriverController(IDriverRepository driverRepo)
        {
            _driverRepository = driverRepo;
        }
        [HttpGet]
        [Route("getAllDrivers")]
        public IActionResult GetAllDrivers()
        {
            try
            {
                _log.Info("GetAllDrivers : Process Initiated");
                _log.Info("GetAllDrivers : Process Terminated Successfully.");
                return Ok(_driverRepository.DisplayAllDrivers());
            }
            catch (Exception exception)
            {

                _log.Error("GetDrivers : Process Terminated With Exception -", exception);
                return NoContent();
            }
        }
        [HttpPost]
        [Route("addDriver")]
        public IActionResult AddDriver([FromBody] Driver driver)
        {
            try
            {
                _log.Info("AddDriver : Process Initiated");


                var message = _driverRepository.AddDriver(driver);
                if (message == "true")
                {
                    _log.Info("AddDriver : Process Terminated Successfully.");
                    return Ok();
                }
                _log.Info("AddDriver : Duplicate Entry.");
                return Conflict();
            }
            catch (Exception exception)
            {
                _log.Error("AddDriver : Process Terminated With Exception -", exception);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }
        [HttpDelete]
        [Route("removeDriver")]
        public IActionResult DeleteDriver([FromQuery]int licenseNum)
        {
            try
            {
                _log.Info("DeleteDriver : Process Initiated");


                var message = _driverRepository.RemoveDriver(licenseNum);
                if (message == "true")
                {
                    _log.Info("DeleteDriver : Process Terminated Successfully.");
                    return Ok();
                }
                _log.Info("DeleteDriver : Not Found.");
                return NotFound();
            }
            catch (Exception exception)
            {
                _log.Error("DeleteDriver : Process Terminated With Exception -", exception);
                return StatusCode(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet]
        [Route("driversByType")]
        public IActionResult GetDriversByVehicleType(string vehicleType)
        {
            try
            {
                _log.Info("getdriversByType : Process Initiated");


                _log.Info("getdriversByType : Process Terminated Successfully.");
                return Ok(_driverRepository.DriversByVehicleType(vehicleType));
            }
            catch (Exception exception)
            {

                _log.Error("getdriversByType : Process Terminated With Exception -", exception);
                return NoContent();
            }
        }
    }
}
