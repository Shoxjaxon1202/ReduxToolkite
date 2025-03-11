import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
  isAuth: JSON.parse(localStorage.getItem("isAuth")) || false, 
  isLoading: false,
  error: null,
};


const loginApi = createAsyncThunk(
  "auth/loginApp",
  async ({ email, password }, { rejectWithValue }) => {
    // Statik foydalanuvchi ma'lumotlari
    const staticUser = {
      username: email,
      password: "testpassword",
    };

    try {
      if (email === staticUser.username && password === staticUser.password) {
        console.log("Siz login qildingiz!");
        localStorage.setItem("isAuth", JSON.stringify(true)); // Kirishni saqlash
        localStorage.setItem("username", JSON.stringify(email));
        return { isAuth: true, message: "Login muvaffaqiyatli!" };
      } else {
        
        throw new Error("Foydalanuvchi nomi yoki parol noto'g'ri!");
      }
    } catch (error) {
      console.error("Login muvaffaqiyatsiz:", error.message);
      return rejectWithValue(error.message);
    }
  }
);

const logoutApi = createAsyncThunk("auth/logoutApp", async () => {
  localStorage.removeItem("isAuth"); // Kirishni o'chirish
  console.log("Siz logout qildingiz!");
  return { isAuth: false };
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginApi.fulfilled, (state) => {
        state.isAuth = true;
        state.isLoading = false;
        state.error = null;

      })
      .addCase(loginApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutApi.fulfilled, (state) => {
        state.isAuth = false;
        state.error = null;
      });
  },
});

export default authSlice.reducer;
export { loginApi, logoutApi };
