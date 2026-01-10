using WebApi.Core.Providers;

namespace WebApi.Features.Users;
internal sealed class UserHandlers(TokenProvider tokenProvider)
{
    public async Task<IResult> Login(UserModel request)
    {
        if (request.Password.Length <= 3)
            throw new UnauthorizedAccessException("Invalid password.");

        string token = tokenProvider.Create(request);
        return Results.Ok(new { token });
    }
}
