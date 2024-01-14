import './Buttons.css'

const PrimaryButton = (props) => {
    return (
        <div className='button primary-btn'>
            <a href='#btn'>{props.children}</a>
        </div>
    )
}

const SecondaryButton = (props) => {
    return (
        <div className='button secondary-btn'>
            <a href='#btn'>{props.children}</a>
        </div>
    )
}

export default PrimaryButton
export { SecondaryButton }