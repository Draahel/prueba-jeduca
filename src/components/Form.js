import { useContext } from "react"
import { Context } from "../context/reactContext"

export const Form = () => {

    const {
        state,
        handleInputChange,
        handleSubmit,
        AREAS,
        N1,
        SEDES,
        getOptions,
    } = useContext(Context)

    return(
        <div className='container'>
        <h2>Creacion de formulario</h2>
        <form action="" onSubmit={handleSubmit} className="row g-3">

            <div className="col-md-6">
                <label className="form-label">Titulo</label>
                <input type="text" name='title' className="form-control" value={state.title} onChange={handleInputChange} />
            </div>

            <div className="col-md-3">
                <label className="form-label">Area</label>
                <select name='area' className='form-select' onChange={handleInputChange} defaultValue={"-1"}>
                <option value="-1">--Seleccione--</option>
                { AREAS.map( (area ,index) => <option key={index}>{ area }</option>) }
                </select>
            </div>

            <div className='col-md-3'>
                <label className="form-label">Sede</label>
                <select name='sede' className='form-select' onChange={handleInputChange} value={state.n1}>
                <option value="-1">--Seleccione--</option>
                { SEDES.map( (sede ,index) => <option key={index}>{ sede }</option>) }
                </select>
            </div>


            <div className='col-md-4'>
                <label className="form-label">N1</label>
                <select name='n1' className='form-select' onChange={handleInputChange} defaultValue={"-1"} required>
                <option value="-1">--Seleccione--</option>
                { N1.map( (n ,index) => <option key={index}>{ n }</option>) }
                </select>
            </div>


            <div className='col-md-4'>
                <label className="form-label">N2</label>
                <select name='n2' className='form-select' onChange={handleInputChange} defaultValue={"-1"} required>
                <option value="-1">--Seleccione--</option>
                { getOptions(state.n1,1).map( (n ,index) => <option key={index}>{ n }</option>) }
                </select>
            </div>

            <div className='col-md-4'>
                <label className="form-label">N3</label>
                <select name='n3' className='form-select' onChange={handleInputChange} defaultValue={"-1"} required>
                <option value="-1" >--Seleccione--</option>
                { getOptions(state.n2,2).map( (n ,index) => <option key={index}>{ n }</option>) }
                </select>
            </div>

            <div className='col-md-6'>
                <label className="form-label">Fecha</label>
                <input name='year' value={state.year} className='form-control' type="date" onChange={handleInputChange}/>
            </div>

            <div className='col-md-6'>
                <label className="form-label">Fecha de vencimiento</label>
                <input name='expiration' value={state.expiration} className='form-control' type="date" onChange={handleInputChange}/>
            </div>

            <div>
                <label className="form-label">Observacion</label>
                <textarea name='observation' value={state.observation} className='form-control' cols={30} rows={10} placeholder="Observaciones: " onChange={handleInputChange}></textarea>
            </div>

            <div className='d-grid gap-2 col-6 mx-auto'>
                <button className='btn btn-primary btn-lg'>
                Enviar
                </button>
            </div>
            </form>
        </div>
    )
}