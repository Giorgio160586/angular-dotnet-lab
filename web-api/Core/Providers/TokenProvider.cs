using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WebApi.Features.Users;

namespace WebApi.Core.Providers;

internal sealed class TokenProvider(IConfiguration configuration)
{
    public string Create(UserModel user)
    {
        var secretKey = configuration["Jwt:Secret"];
  
        if (string.IsNullOrEmpty(secretKey))
            throw new InvalidOperationException("JWT secret key is not configured.");

        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));

        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var tokenDescription = new SecurityTokenDescriptor
        {
            Subject = new System.Security.Claims.ClaimsIdentity(new[]
            {
                new System.Security.Claims.Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                 new System.Security.Claims.Claim(JwtRegisteredClaimNames.UniqueName, user.UserName),
            }),
            Expires = DateTime.UtcNow.AddHours(configuration.GetValue<int>("Jwt:Expiration")),
            SigningCredentials = credentials,
        };

        var handler = new JsonWebTokenHandler();

        var token = handler.CreateToken(tokenDescription);

        return token;
    }
}
