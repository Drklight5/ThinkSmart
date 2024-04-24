
function Layout(props) {
  return (
    <>
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </div>
    </>
  )
}

Layout.propTypes = {}

export default Layout
