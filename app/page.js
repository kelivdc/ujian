export default function Home() {
  return (
    <>
      <div className="w-full bg-slate-200 min-h-screen">
        <div className="max-w-5xl bg-white min-h-screen m-auto border-t-4 border-b-4 border-dashed border-blue-400">
          <div className="p-4 m-auto">
            <h1 className="py-4 text-2xl font-bold text-slate-600">
              Selamat Datang Peserta Ujian
            </h1>
            <div className="border p-2">
              Silahkan masukkan username dan password Anda.
              <br />
              Jika belum punya atau salah. Harap segera hubungi panitia atau
              pengawas.
            </div>
            <div class="divider">LOGIN</div>
            <div className="max-w-md m-auto mt-8">
              <div className="form-control">
                <label class="label">
                  <span class="label-text">Username</span>
                  <input
                    type="text"
                    class="input input-sm input-bordered w-full max-w-xs"
                    value=""
                  />
                </label>
              </div>
              <div className="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                  <input
                    type="password"
                    class="input input-sm input-bordered w-full max-w-xs"
                    value=""
                  />
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center py-8">
              <button class="btn btn-primary btn-sm">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
