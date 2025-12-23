const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setMessage("");
  try {
    const res = await api.post("/auth/login", formData);

    // Save token first
    localStorage.setItem("token", res.data.token);

    // Give a small delay to ensure token is stored before Dashboard fetch
    setTimeout(() => {
      navigate("/dashboard");
    }, 50);

  } catch (err) {
    setMessage(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
};
