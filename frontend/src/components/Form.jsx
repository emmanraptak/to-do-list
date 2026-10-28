function Form() {
    return (
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6 col-lg-5">
                    <form>
                        <div class="mb-3">
                            <label for="taskName" class="form-label">Task name:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Description:</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="dueDate" class="form-label">Due date:</label>
                            <input type="date" class="form-control" id="dueDate" />
                        </div>
                        <div class="mb-3 d-flex justify-content-center gap-3">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="submit" class="btn btn-danger">Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;