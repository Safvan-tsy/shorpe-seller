import NotFound from '../components/ui/notfound/NotFound';
import useDocumentTitle from '../hooks/useDocumentTitle';


const NotFoundScreen = () => {
  useDocumentTitle('404', false);
  return (
    <NotFound />
  )
}

export default NotFoundScreen