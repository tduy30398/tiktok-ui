import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/7fded0fa555ee5dc830337f84367fb59~c5_300x300.webp?x-expires=1663167600&x-signature=qL7WIuSyNR8XC%2BT1v4kCWsHJe%2Fo%3D"
                alt="Quynh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>quynhalee</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Quỳnh Alee</span>
            </div>
        </div>
    );
}

export default AccountItem;
