import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonComponentProps {
    width?:string,
    height?:string,
    styles?: React.CSSProperties;
    borderRadius?: number;
    className?: string;
    isLoading:boolean,
    count?: number
}

const SkeletonComponent:React.FC<SkeletonComponentProps> = ({ 
	width = '100%',
    height = '100%',
    styles = {},
    borderRadius = 15,
    className,
    isLoading,
    count = 1,
    ...rest
 }) =>{
    if (isLoading) {
        return (
            <>
                {Array.from({ length: count }).map((_, index) => (
                    <div key={index} style={{ ...styles }} className={className}>
                        <Skeleton height={height} width={width} borderRadius={borderRadius} {...rest} />
                    </div>
                ))}
            </>
        );
    }

    return null;
};


export default SkeletonComponent;

