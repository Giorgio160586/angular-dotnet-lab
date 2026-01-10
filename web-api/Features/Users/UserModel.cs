namespace WebApi.Features.Users;
public sealed record UserModel
{
    public required string Email { get; set; }

    public required string Password { get; set; }
}
