using WebApi.Core.Providers;

namespace WebApi.Features.Users;
internal sealed class UserHandlers(TokenProvider tokenProvider)
{
    public async Task<string> Handle(UserModel request)
    {
        if (String.IsNullOrEmpty(request.UserName))
            throw new UnauthorizedAccessException("Invalid username.");

        string token = tokenProvider.Create(request);
        return token;
    }
}
