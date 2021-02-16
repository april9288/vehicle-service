import { FormattedMessage } from 'react-intl';

export default (id, values = {}) => <FormattedMessage id={id} values={{ ...values }} />;