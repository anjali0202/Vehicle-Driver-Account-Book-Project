using Booking_Microservice.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Booking_Microservice.Data
{
    public class _db : DbContext
    {
        public _db( DbContextOptions options) : base(options)
        {
        }
        public DbSet<Booking> Bookings { get; set; }
    }
}
