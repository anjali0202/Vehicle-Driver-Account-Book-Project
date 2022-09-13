using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vehicle_Microservice.Model;

namespace Vehicle_Microservice.Repository
{
    public interface IVehicleRepository
    {
        public List<Vehicle> GetAllVehicles();
        public string AddVehicle(Vehicle vehicle);
        public List<Vehicle> DisplayVehicleByType(string type);
        public Vehicle DisplayVehicleByRegistrationNo(int regNo);
        public string RemoveVehicle(int regNo);
        public string UpdateVehicleDetails(int regNo, UpdateVehicle vehicle);

    }
}
