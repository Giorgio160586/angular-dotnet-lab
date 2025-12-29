namespace WebApi.Models;
public sealed record UserModel
{
    public int Id { get; set; }

    public required string Email { get; set; }
}
