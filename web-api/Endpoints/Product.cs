using WebApi.Models;

namespace WebApi.Endpoints;

public static class ProductEndpoints
{
    private const string Tag = "Products";
    public static IEndpointRouteBuilder Map(this IEndpointRouteBuilder app)
    {
        app.MapGet("/products", () => new[] { "Product 1", "Product 2", "Product 3" })
           .WithTags(Tag)
           .RequireAuthorization();

        app.MapPost("/product/insert", (ProductModel model) => { return "OK"; })
            .WithTags(Tag)
            .RequireAuthorization();

        return app;
    }
}
