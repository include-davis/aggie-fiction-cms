const callbacks = {
  onUpdate: async () => {
    try {
      console.log("CMS content updated, calling revalidate route...");
      const res = await fetch(process.env.REVALIDATE_URL, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        console.error("Revalidate route returned error:", res.status);
      } else {
        console.log("Revalidate route successfully called");
      }
    } catch (err) {
      console.error("Failed to call revalidate route:", err);
    }
  },
};

export default callbacks;
