using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vehicle_Microservice.Data;
using Vehicle_Microservice.Model;

namespace Vehicle_Microservice.Repository
{
    public class VehicleRepository:IVehicleRepository
    {
        private readonly VehicleMicroserviceDBContext vehicleDbContext;
        public VehicleRepository(VehicleMicroserviceDBContext dbContext)
        {
            vehicleDbContext = dbContext;
        }
        public List<Vehicle> GetAllVehicles()
        {
            try
            {
                return (vehicleDbContext.Vehicles.ToList());

            }
                
             catch (Exception e)
            {
                throw e;
            }


        }
        public string AddVehicle(Vehicle vehicle)
        {
            try
            {
                if (vehicleDbContext.Vehicles.Any(p => p.RegistrationNo == vehicle.RegistrationNo))
                {
                    return "false";
                }
                vehicleDbContext.Vehicles.Add(vehicle);
                vehicleDbContext.SaveChanges();
                return "true";
            }
            catch (Exception e)
            { 
                throw e;
            }
        }
        
        public List<Vehicle> DisplayVehicleByType(string type)
        {
            try
            {
                return vehicleDbContext.Vehicles.Where(p => p.VehicleType == type).ToList();
            }
            catch (Exception e)
            {

                throw e;
            }
        }
        public Vehicle DisplayVehicleByRegistrationNo(int regNo)
        {
            try
            {
                return vehicleDbContext.Vehicles.SingleOrDefault(p => p.RegistrationNo == regNo);
            }
            catch (Exception e)
            {

                throw e;
            }

        }
        
        public string RemoveVehicle(int regNo)
        {
            var vehicle = vehicleDbContext.Vehicles.Find(regNo);
            if (vehicle != null)
            {
                vehicleDbContext.Remove(vehicle);
                vehicleDbContext.SaveChanges();
                return "true";
            }
            return "false";

        }

        public string UpdateVehicleDetails(int regNo, UpdateVehicle vehicle)
        {
            var veh = vehicleDbContext.Vehicles.Find(regNo);
            if (veh != null)
            {
                veh.ModelName = vehicle.ModelName;
                veh.NumberOfSeat = vehicle.NumberOfSeat;
                veh.VehicleType = vehicle.VehicleType;
                veh.AcAvailable = vehicle.AcAvailable;
                vehicleDbContext.SaveChanges();
                return "true";
            }
            return "false";
        }
        
        
    }
}
