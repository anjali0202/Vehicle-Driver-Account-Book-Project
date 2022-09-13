using AuthenticationMicroservice.Data;
using AuthenticationMicroservice.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AuthenticationMicroservice.Repository
{
    public class AuthRepository : IAuthRepository
    {
        private AuthDbContext authDbContext;

        public AuthRepository(AuthDbContext authDbContext)
        {
            this.authDbContext = authDbContext;
        }

        public async Task<Admin> AuthenticateAsync(string username, string password)
        {
            var admin = await authDbContext.Admins
                .FirstOrDefaultAsync(x => x.UserName.ToLower() == username.ToLower() && x.Password == password);

            if (admin == null)
            {
                return null;
            }
            admin.Password = null;
            return admin;
        }
    }
}
