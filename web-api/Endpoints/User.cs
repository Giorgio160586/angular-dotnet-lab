using WebApi.Handlers;
using WebApi.Models;

namespace WebApi.Endpoints;

public static class UserEndpoints
{
    private const string Tag = "Users";
    public static IEndpointRouteBuilder Map(this IEndpointRouteBuilder app)
    {
        app.MapPost("users/login", async (UserModel request, LoginUser login) => await login.Handle(request))
            .WithTags(Tag);

        return app;
    }
}
