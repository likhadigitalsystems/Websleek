import { Navigate, useParams } from "react-router-dom";
import { ServiceDetailPage } from "../components/ServiceDetailPage";
import { getServiceBySlug } from "../data/services";

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <ServiceDetailPage service={service} />;
}
