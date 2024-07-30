const PictureCoverJsx = ({ alternativeText, source }) => {

    return (

        <picture className="w-full h-full">
            <source media="(max-width: 375px)" srcSet={`${ source }?height=300&quality=80`} />
            <source media="(max-width: 640px)" srcSet={`${ source }?height=400&quality=80`} />
            <img
                alt={ alternativeText }
                className="w-full h-full object-cover"
                src={ source }
            />
        </picture>

    )

}
export default PictureCoverJsx
