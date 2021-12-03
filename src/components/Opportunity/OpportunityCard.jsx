import CardStyles from "./Opportunity.module.css";
import Link from 'next/link';

function OpportunityCard({ id, jobTitle, company, location, paragraph, deadline }) {
  return (
    // <Link href="[jobProfile]/[id]" as={`/jobProfile/${id}`} passHref>
    <div className={CardStyles.card}>
      <p className={CardStyles.jobTitle}>{jobTitle}</p>
      <div className={CardStyles.companyDetails}>
        <p className={CardStyles.company}>{company}</p>
        <p className={CardStyles.location}>{location}</p>
      </div>
      <p className={CardStyles.paragraph}>{paragraph}</p>
      <p className={CardStyles.deadline}>Deadline: {deadline}</p>
    </div>
    // </Link>
  );
}

export default OpportunityCard;
