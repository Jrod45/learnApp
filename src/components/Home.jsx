function Home({ title = "Home", description = "Welcome to the Wise Language Mentor app!" }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Home;