namespace WebApi.Features.Users;

public static class UserEndpoints
{
    private const string Tag = "Users";
    public static IEndpointRouteBuilder Map(this IEndpointRouteBuilder app)
    {
        app.MapPost("users/login", async (UserModel request, UserHandlers user) => await user.Login(request))
            .WithTags(Tag);

        return app;
    }
}
