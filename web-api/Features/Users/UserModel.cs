namespace WebApi.Features.Users;
public sealed record UserModel
{
    public int Id { get; set; }

    public required string UserName { get; set; }
}
