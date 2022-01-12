
function ManajementBuku({ bookList }) {
    console.log(bookList);
    return(
        <div id="daftarBuku">
            <h2 className="mt-3">Daftar Buku</h2>
            <hr/>
            <button className="btn btn-primary m-2">Tambah Buku</button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th>Harga</th>
                        <th>Stok</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                   {bookList.map((book,index) => (
                       <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{book.judul}</td>
                        <td>{book.pengarang}</td>
                        <td>{book.Harga}</td>
                        <td>{book.stok}</td>
                        <td>Aksi</td>
                       </tr>
                   ))}
                </tbody>
            </table>
        </div>
    );
}
export default ManajementBuku;