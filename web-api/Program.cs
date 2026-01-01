using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi;
using Scalar.AspNetCore;  // dotnet add package Scalar.AspNetCore
using System.Text;
using WebApi.Endpoints;
using WebApi.Handlers;
using WebApi.Providers;

var builder = WebApplication.CreateBuilder(args);

// Aggiungo la gestione degli errori --->
builder.Services.AddExceptionHandler<ExceptionHandlers>();
builder.Services.AddProblemDetails();
// <---

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy => policy
            .WithOrigins("http://localhost:4200") // Angular dev server
            .AllowAnyHeader()
            .AllowAnyMethod());
});

builder.Services.AddSingleton<TokenProvider>();
builder.Services.AddOpenApi(options =>
{
    options.AddDocumentTransformer((doc, ctx, ct) =>
    {
        // Security scheme Bearer
        doc.Components ??= new OpenApiComponents();
        doc.Components.SecuritySchemes ??= new Dictionary<string, IOpenApiSecurityScheme>();
        doc.Components.SecuritySchemes["BearerAuth"] = new OpenApiSecurityScheme
        {
            Type = SecuritySchemeType.Http,
            Scheme = "bearer",
            BearerFormat = "JWT",
            In = ParameterLocation.Header,
            Name = "Authorization"
        };

        return Task.CompletedTask;
    });
});

builder.Services.AddValidation();

builder.Services.AddAuthorization();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(o =>
    {
        o.RequireHttpsMetadata = false;
        o.TokenValidationParameters = new TokenValidationParameters
        {
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Secret"]!)),
            ClockSkew = TimeSpan.Zero
        };
    });

builder.Services.AddScoped<LoginUser>();

var app = builder.Build();

// Endpoint OpenAPI + UI Scalar (solo in Dev)
if (app.Environment.IsDevelopment())
{
    // Espone il documento OpenAPI (JSON) su /openapi/v1.json http://localhost:5000/openapi/v1.json
    app.MapOpenApi();

    // Espone la UI moderna Scalar su /scalar http://localhost:5000/scalar
    app.MapScalarApiReference();
}

app.UseCors("AllowAngular");

UserEndpoints.Map(app);
ProductEndpoints.Map(app);

app.UseAuthentication();
app.UseAuthorization();

// Aggiungo la gestione degli errori --->
app.UseExceptionHandler();
// <---

app.Run();
