const fetchData = async (id: number): Promise<{ id: number; name: string }> => {
    if (id === 2) throw new Error("User not found");
    return { id, name: "Alice" };
  };



const fetchUser = async () => {
    // A Better Way: Using a handleAsync Utility
    const [user, error] = await handleAsync(fetchData(1));

    if (error) {
      console.error("Error:", error.message);
    } else {
      console.log("User:", user.name);
    }
  }

  fetchUser(); 
  // User: Alice