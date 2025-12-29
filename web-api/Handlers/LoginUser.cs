using WebApi.Providers;
using WebApi.Models;

namespace WebApi.Handlers
{
    internal sealed class LoginUser(TokenProvider tokenProvider)
    {
        public async Task<string> Handle(UserModel request)
        {
            string token = tokenProvider.Create(request);
            return token;
        }
    }
}
